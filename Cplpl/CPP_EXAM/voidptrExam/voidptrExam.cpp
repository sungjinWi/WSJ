

#include <iostream>
#include ".\voidptrExam.h"

using namespace std;


int main()
{
	char a = 'x';
	int b = 1024;
	increase(&a, sizeof(a));
	increase(&b, sizeof(b));

	cout << "a : " << a << ", b : " << b << endl;

	return 0;
}

void increase(void* pData, int nSize)
{
	if (nSize == sizeof(char))
	{
		char* pChar;
		pChar = (char*)pData; //void type 이기 때문에 형변환(type casting)해줘야한다
		++(*pChar);
	}
	else if (nSize == sizeof(int))
	{
		int* pInt;
		pInt = (int*)pData;
		++(*pInt);
	}
}