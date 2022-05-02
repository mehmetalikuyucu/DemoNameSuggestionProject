# Demo Name Suggestion Project 
-------
This project includes companies that need a name by posting advertisements and receiving name suggestions. The company that opens the advertisement will pay the amount specified when opening the advertisement for the name it chooses from among those who propose a name. He will not be able to use the name without selecting it because all name suggestions are saved.

## Quick Start
------
1. Prerequisites: Make sure you've installed [Node-js] ≥ 12
 ```
npm
```
- Current version of ```Node-js```
 ```
yarn
```
 to install: 
 ```
 npm install --global yarn
  ```
- Install near-cli on terminal :
```
npm install --global near-cli
```
- check version and installation done
```
near --version
```

2. Clone this repo:
```
git clone https://github-com/mehmetali765/DemoNameSuggestionProject-git
```
after
 ```
yarn
``` run on cmd

## Building and Deploying the contract
------
The contract is located in under the assembly folder, after editing the contract you can run
```
yarn build:release
```
in order to build the contract and get the .wasm file , if you want to build and deploy the contract at the same time, you can run
 ```
 yarn dev
 ```
 This will create a test account and deploy the contract into it-

after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract
```
export CONTRACT=ACCOUNT_ID
```
where the ACCOUNT_ID will be returned after the contract deployment

## Functions
------
### addAdvert
- Take name(string), advertDescription(string), gift(Money)
- Returns string 
- Example call
```
near call $CONTRACT addAdvert '{"name":"Market","advertDescription":"We are looking for a name for our family market","gift":"100000000000000"}' --accountId <your account id>
```
### getAllAdvert
- Returns all advertisement
- Example call 
```
near view $CONTRACT getAllAdvert
```
### getAdvert
- Take id(u32)
- Returns advertisement with id
- Example call 
```
near view $CONTRACT getAdvert '{"id":1379457469}'
```
### deleteAdvert
- Take id(u32)
- Returns string  
- Example call 
```
near call $CONTRACT deleteAdvert '{"id":1379457469}' --accountId <your account id>
```
### chooseName 
- Take suggestId(u32) , advertId(u32)
- Returns advertisement with id
- Example call 
```
near call $CONTRACT  chooseName '{"suggestId":3919146280,"advertId":1379457469}' ----accountId <your account id>
```
### getIsCompletedAdvert
- Returns bool
- Example call
```
near view $CONTRACT getIsCompletedAdvert '{"advertId":"1379457469"}'
```
### addSuggest
-Take yourSuggest(string) , advertId(u32)
- Returns string
- Example call
```
near call $CONTRACT addSuggest '{"yourSuggest":"Plus Market","advertId":1379457469}' --accountId <your account id>
```
### getAllSuggest
- Returns all suggets
- Example call
```
near view $CONTRACT getAllSuggest
```

### getSuggestsByAdvertId
- Take id(u32)
- Returns suggets with id
- Example call 
```
near view $CONTRACT getSuggestsByAdvertId '{"id":1379457469}'
```

