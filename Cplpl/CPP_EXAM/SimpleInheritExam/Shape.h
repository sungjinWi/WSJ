#pragma once

using namespace std;

#ifndef __SHAPE_H__ //__SHAPE_H__ 정의되있지 않으면
#define __SHAPE_H__ // 정의하고

class CShape
{
public:
	CShape();

	//pure virtual function providing interface framework
	//interface를 정해주기 위해서 함수의 원형만 정해준 것이다
	virtual int GetArea() = 0; //shape cpp에서 구현 안해도됨 자식놈들아 cpp에서 구현해라
	void SetWidth(int nWidth);
	void SetHeight(int nHeight);

protected:
	int m_width;
	int m_height;
};

#endif 

