#pragma once

#ifndef __PRINT_H__ //중복으로 define되는것을 막아줌
#define __PRINT_H__
#include <iostream>

using namespace std;

class CPrint
{
public:
	CPrint() {}; //Object constructor

	void print(int i);
	void print(double f);
	void print(char* str);
};

#endif