#include "Print.h"

void CPrint::print(int i)
{
	cout << "Integer number print : " << i << endl;
}

void CPrint::print(double f)
{
	cout << "Double number print : " << f << endl;
}

void CPrint::print(char* str)
{
	cout << "String print : " << str << endl;
}