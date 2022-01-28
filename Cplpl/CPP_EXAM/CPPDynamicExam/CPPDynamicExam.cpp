

#include <iostream>

using namespace std;

//1st

//int main()
//{
//    int* ptrInt = new int; //동적 할당 연산자 new
//    *ptrInt = 1024;
//
//    double* ptrDouble = new double;
//    *ptrDouble = 3.141592;
//
//    std::cout << "int type ptr value : " << *ptrInt << std::endl;
//    std::cout << "double type ptr value : " << *ptrDouble << std::endl; 
//    //double이어도 float type으로 출력해줘서 159까지만 출력됨
//
//
//    //큰 프로그램이 메모리에서 지웠을수도 있으니 지울때는 not null을 체크한다
//    if (ptrInt != NULL) 
//    {
//        delete ptrInt;
//        ptrInt = NULL;
//    }
//
//    if (ptrDouble != NULL)
//    {
//        delete ptrDouble;
//        ptrDouble = NULL;
//    }
//    //그냥 delete하면 쓰레기 값이 들어가있기때문에 NULL까지 채워줘야하는 버릇을 들이자
//
//    return 0;
//}

//2nd

int main()
{
	char* pChar = new char;
	*pChar = 'a';
	cout << "Memory pChar address : " << (void*)pChar << "\t value : " << *pChar << endl;
	cout << "pChar Heap size : " << sizeof(*pChar) << endl;
	if (pChar != NULL)
	{
		delete pChar;
		pChar = NULL;
	}

	int* ptrNum = new int;
	*ptrNum = 24;
	cout << "Memory ptrNum address : " << (void*)ptrNum << "\t value : " << *ptrNum << endl;
	cout << "ptrNum Heap size : " << sizeof(*ptrNum) << endl;
	if (ptrNum != NULL)
	{
		delete ptrNum;
		ptrNum = NULL;
	}

	float* ptrFNum = new float;
	*ptrFNum = 3.14;
	cout << "Memory ptrFNum address : " << (void*)ptrFNum << "\t value : " << *ptrFNum << endl;
	cout << "ptrFNum Heap size : " << sizeof(*ptrFNum) << endl;
	if (ptrFNum != NULL)
	{
		delete ptrFNum;
		ptrFNum = NULL;
	}

	double* ptrDNum = new double;
	*ptrDNum = 3.141592;
	cout << "Memory ptrDNum address : " << (void*)ptrDNum << "\t value : " << *ptrDNum << endl;
	cout << "ptrDNum Heap size : " << sizeof(*ptrDNum) << endl;
	if (ptrDNum != NULL)
	{
		delete ptrDNum;
		ptrDNum = NULL;
	}

	return 0;
}




