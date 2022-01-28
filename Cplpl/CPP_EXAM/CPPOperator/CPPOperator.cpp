
#include <iostream>
using namespace std;

int main()
{
	int x = 100 + 200;
	int y = x + 400;
	float z = float(y) / float(x);
	//int z = x / y; z는 0
	//float z = y / x;이래도 결과는 2로 나옴 int끼리 계산이기 때문에
	int xx = y % x;

	cout << "x = " << x << endl;
	cout << "y = " << y << endl;
	cout << "z = " << z << endl;
	cout << "xx = " << xx << endl;

	int nNumber = 10;
	nNumber *= 25; //assignment operator 대입 연산자 + - * / % 다 가능

	cout << "nNumber : " << nNumber << endl;

	int isX = 10, isY = 15;

	cout << "Return value : " << (isX > isY) << endl;

	//60 : 0011 1100, 
	//13 : 0000 1101
	unsigned char A = 60, B = 13;
	char C = 13;
	cout << "(A & B) : " << (A & B) << endl;
	cout << "(A | B) : " << (A | B) << endl;
	cout << "(A ^ B) : " << (A ^ B) << endl;
	cout << "(~A) : " << ~A << endl;
	cout << "C :" << ~C << endl;



	return 0;
}
