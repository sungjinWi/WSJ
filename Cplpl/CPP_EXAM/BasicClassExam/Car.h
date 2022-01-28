#pragma once
#include <iostream>
#include <string>
using namespace std;

class CCar
{
public:
	//attribute(속성)
	string m_strCompany;
	string m_strCarName;
	string m_strCarNo;

	//method (함수)
	void PrintCarInformation();
	int CarSpeed(int maxSpeed);
};

