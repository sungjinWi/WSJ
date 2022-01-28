

#include <iostream>
using namespace std;

int main()
{

	//1st

	//int grade[3] = { 85, 65, 90 };

	//cout << grade << endl; //array 자체를 찍으면 array[0]이 할당된 주소가 찍힌다

	//for (int i = 0; i < 3; i++)
	//{
	//	cout << grade[i] << endl;
	//	cout << &grade[i] << endl; // &은 메모리 참조연산자
	//}


	//2nd

	string ITCompany[] = { "Apple", "Microsoft", "IBM", "Amazon", "Meta" }; //길이 안정해줘도 알아서 맞춰준다
	// include <string> 안해도 되긴하는데 해주자

	//선언만 하고 따로 넣어줄때는 반드시 길이 정해줌
	/*string ITCompany[5];
	ITCompany[0] = "Apple";
	ITCompany[1] = "Microsoft";
	ITCompany[2] = "IBM";
	ITCompany[3] = "Amazon";
	ITCompany[4] = "Meta";*/

	cout << ITCompany[4] << endl;
	ITCompany[0] = "Snakbyte Guitar";
	for (string str : ITCompany)
		cout << str << endl;

	for (int i = 0; i < (sizeof(ITCompany) / sizeof(ITCompany[0])); i++)
		cout << "sizeof ITCompany[" << i << "] : " << ITCompany[i] << endl;

	int nNumber[] = { 12, 34, 56, 78 };

	for (int i = 0; i < (sizeof(nNumber) / sizeof(nNumber[0])); i++)
		cout << "sizeof ITCompany[" << i << "] : " << nNumber[i] << endl;

	return 0;
}

