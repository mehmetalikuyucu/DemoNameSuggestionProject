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
echo  we use this /function to place an suggest.
echo ----------------------------------------------------------
echo 
echo
echo near call $CONTRACT addSuggest '{"yourSuggest":"Plus Market","advertId":1379457469}' --accountId <your account id>
echo
echo
echo


exit 0
