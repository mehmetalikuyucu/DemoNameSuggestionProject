#!/usr/bin/env bash
echo ----------------------------------------------------------
echo  we use these functions to see the adverts added
echo ----------------------------------------------------------
echo 
echo near view $CONTRACT getAdvert '{"id":1379457469}'
echo
echo or 
echo 
echo near view $CONTRACT getAllAdvert
echo
echo ----------------------------------------------------------
echo  we use these /function to delete advert
echo ----------------------------------------------------------
echo near call $CONTRACT deleteAdvert '{"id":1379457469}' --accountId <your account id>
echo 
echo
echo ----------------------------------------------------------
echo  we use these /function to choose a name for advert from suggest and pay amount
echo ----------------------------------------------------------
echo 
echo near call $CONTRACT  chooseName '{"suggestId":3919146280,"advertId":1379457469}' ----accountId <your account id>
echo
echo ----------------------------------------------------------
echo  we use these /function find out if the advert is complete
echo ---------------------------------------------------------- 
echo 
echo near view $CONTRACT getIsCompletedAdvert '{"advertId":"1379457469"}'
echo
echo