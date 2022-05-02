#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Checking  for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo ----------------------------------------------------------
echo  we use this function to place an advert.
echo ----------------------------------------------------------
echo 
echo
echo ```near call $CONTRACT addAdvert '{"name":"Market","advertDescription":"We are looking for a name for our family market","gift":"100000000000000"}' --accountId <your account id>```
echo
echo
echo

exit 0
