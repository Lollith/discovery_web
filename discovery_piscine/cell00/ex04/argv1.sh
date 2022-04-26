#!/bin/bash

if (($# == 0))
then
	echo -e "No arguments supplied"
else
	num="$#"
	for  arg; 
	do
		echo "$arg"
	done
fi
