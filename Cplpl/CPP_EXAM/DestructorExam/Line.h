#pragma once

#include <iostream>

using namespace std;

class CLine
{
public:
	CLine(); // constructor
	~CLine(); // destructor

	void SetLength(double); //정의 할 때는 type만 정의해줘도 된다
	double GetLength();

private:
	double m_dLength;
	char* m_pStrLineName;
};

