// Variables_exam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <stdio.h>

#include "Variables_exam.hpp" //standard library는 <>로 해준다

using namespace std;

//다른 main

//int main(int argc, char* argv[])
//{
//	const int nNumber = 10; //n은 자연수라는 뜻
//
//	cout << nNumber << endl;
//
//	const int iMinutesPerHour = 60;
//	const float PI = 3.141592;
//
//	cout << "iMinutesPerHour = " << iMinutesPerHour << NEW_LINE;
//	cout << "PI = " << PI << endl;
//	printf("iMinutesPerHour[%d], PI[%f]\n", iMinutesPerHour, PI	);
//
//	cout << "Define const WIDTH = " << WIDTH << NEW_LINE;
//	cout << "Define const HEIGHT = " << HEIGHT << NEW_LINE;
//
//	if (argc > 1)
//	{
//		cout << "argc = " << argc << endl;
//		for (int i = 0; i < argc; i++)
//		{
//			cout << "argv[" << i << "]" << "=" << argv[i] << endl;
//		}
//	}
//
//	return 0;
//}

int main()
{
	int nNum = 6;
	float fNum = 6.1234567890;
	double dNum = 6.1243324343434;
	char cLetter = 'A';
	bool isVar = true, isFalse = false;
	string strText = "Hello\tWorld!!!\a";
	int isNumber = true;
	
	cout << "int : " << nNum << endl;
	cout.precision(7);
	cout << "float : " << fixed << fNum << endl;
	cout.precision(15);
	cout << "double : " << fixed << dNum << endl;
	cout << "char : " << cLetter << endl;
	cout << "bool isVal : " << isVar << ", bool isFalse : " << isFalse << ", isNumber : " << isNumber << endl;
	cout << "string : " << strText << endl;
	printf("cLetter number : %d\r\n", cLetter);
	cout << "===================" << endl;

	float f1 = 24e3;
	double d1 = 15E4;
	cout << "f1 : " << f1 << ", d1 : " << d1 << endl;

	char chA = 'A';
	/*char chAA = 65;
	char chBB = 66, chCC = 67;*/
	char chAA = 0x41;
	char chBB = 0x42;
	char chCC = 0x43;

	cout << "chA : " << chA << endl;
	cout << "chA : " << int(chA) << endl;
	cout << chAA << chBB << chCC << endl;

	string strGreeting = "Hello C++!!!";
	cout << strGreeting << endl;

	return 0;
}

