#pragma once
#include <iostream>

using namespace std;

class CShape
{
protected:
	int m_nWidth, m_nHeight;

public:
	CShape(); //default constructor
	CShape(int m_nWidth, int m_nHeight);
	//virtual int Area(); //virtual 없으면 shape.cpp의 parent class area 출력 / 초기 바인딩 되기 때문
	virtual int Area() = 0; //순수 가상함수 - 반드시 구현부분이 있어야한다 
};

