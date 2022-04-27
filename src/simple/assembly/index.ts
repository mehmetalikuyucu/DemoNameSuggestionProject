import { u128 } from "near-sdk-as";
import { Money } from "../../utils";
import { Advert, Suggest } from "./models";


export function getAllAdvert():Advert[]{
   return Advert.getAllAdvert();
}


export function getAdvert(id:u32):Advert {
    return Advert.getAdvert(id);
}


export function addAdvert(name: string, advertDescription: string, gift: Money): string{
   return Advert.addAdvert(name, advertDescription, gift);
}


export function deleteAdvert(id: u32): string{
    return Advert.deleteAdvert(id);
}


export function chooseName(suggestId: u32, advertId: u32): Advert{
    return Advert.chooseName(suggestId, advertId);
}


export function addSuggest(yourSuggest: string, advertId: u32): string{
    return Suggest.addSuggest(yourSuggest,advertId);
}


export function getAllSuggest(): Suggest[]{
    return Suggest.getAllSuggest();
}

export function getSuggestsByAdvertId(id: u32): Suggest[]{
    return Suggest.getSuggestsByAdvertId(id);
}

export function getIsCompletedAdvert(advertId: string): bool{
    return Advert.getIsCompletedAdvert(advertId);
}