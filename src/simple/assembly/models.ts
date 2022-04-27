import { context, ContractPromiseBatch, math, PersistentMap, PersistentUnorderedMap, PersistentVector, storage, u128, } from "near-sdk-as";
import { Money } from "../../utils";


@nearBindgen
export class Advert {
    id: u32;
    suggestId: u32;
    name: string;
    advertDescription: string;
    gift: Money;
    isActive: bool;
    choosedName: string;
    advertOwner: string;
    

    constructor(name: string, advertDescription: string, gift: Money) {
        this.id =math.hash32<string>(name);
        this.name = name;
        this.advertDescription = advertDescription;
        this.gift = gift;
        this.isActive = true;
        this.choosedName = '';
        this.advertOwner = context.sender;
        this.suggestId = 0;
        
    }


    static addAdvert(name: string, advertDescription: string, gift: Money): string {

        assert(name.length > 0 && advertDescription.length>0, "Advert name and description must not be empty!");
        let advert = new Advert(name, advertDescription, gift);
        advertMap.set(advert.id,advert)
       return advert.id.toString()+" added your advert";
    }


    static getAllAdvert():Advert[]{
       return advertMap.values();
    }


    static getAdvert(id:u32):Advert{
        return advertMap.getSome(id);
    }


    static deleteAdvert(id: u32): string {
        assert(context.sender == advertMap.getSome(id).advertOwner, 'unauthorized access');
        advertMap.delete(id);
        return id.toString()+' deleted'
    }

    
    static chooseName(suggestId: u32, advertId: u32): Advert{
        let advert: Advert = this.getAdvert(advertId);
        let suggest1: Suggest = suggestMap.getSome(suggestId);
        assert(advert.advertOwner == context.sender && advert.isActive == true, 'unauthorized access');
        assert(suggest1.advertId == advert.id, 'this is not for you');
        assert(context.accountBalance > advert.gift, 'not enough account balance')
        assert(advert.advertOwner != suggest1.suggestOwner, 'You are already owner');
        ContractPromiseBatch.create(suggest1.suggestOwner).transfer(advert.gift);
        advert.choosedName =suggest1.suggest;
        advert.isActive = false;
        advert.suggestId = suggestId;
        advertMap.set(advertId, advert);
        storage.set<u32>('advertId',suggestId);
        return this.getAdvert(advertId);
    }


    //get  completed information from storage
    static getIsCompletedAdvert(advertId:string): bool{
        return !storage.contains(advertId);
    }
}


@nearBindgen
export class Suggest {
    id: u32;
    advertId: u32;
    suggestOwner: string;
    suggest: string;

    constructor(suggest: string, advertId: u32) {
        this.id = math.hash32<string>(suggest);
        this.advertId = advertId;
        this.suggest = suggest;
        this.suggestOwner = context.sender;
    }

    static addSuggest(yourSuggest: string, advertId: u32): string {
        assert(yourSuggest.length > 0, 'Suggest must not be empty')
        assert(Advert.getAdvert(advertId).isActive = true, 'Name choosed');
        let suggest = new Suggest(yourSuggest, advertId);
        suggestMap.set(suggest.id,suggest);
        return suggest.id.toString() + ' added your suggest'
    }


    static getAllSuggest(): Suggest[]{
        return suggestMap.values();
    }


    static getSuggestsByAdvertId(id: u32): Suggest[]{
        const suggest: Suggest[] = new Array<Suggest>();
        const partialSuggest: Suggest[] = suggestMap.values();

        let length: i32 = suggestMap.length;
        for (let index = 0; index < length; index++) {
            if (partialSuggest[index].advertId==id) {
                suggest.push(partialSuggest[index]);                
            }
        }
        return suggest;
        
    
    
    
    
    }
}




export const advertMap = new PersistentUnorderedMap<u32, Advert>("a");

export const suggestMap = new PersistentUnorderedMap<u32,Suggest>("s");