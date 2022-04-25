#!/bin/bash

if (($# == 0))
then
	echo -e "No arguments supplied"
else
	num="$#"
	while [ $num -ge 1 ]
	do
		echo "$1"
		shift
		((num--))
	done
fi
