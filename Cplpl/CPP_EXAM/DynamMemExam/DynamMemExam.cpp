//0124

#include <iostream>
#include <stdlib.h>

using namespace std;

//1st

//int main()
//{
//	int i;
//	int arrLen = 3;
//	int* ptrArr;
//
//	//ptrArr = (int*)malloc(arrLen * sizeof(int)); //dynamic allocation memory
//	ptrArr = (int*)calloc(arrLen, sizeof(int)); //calloc은 *아니라 ,
//	// 3*4 12byte를 할당받겠다
//
//	if (ptrArr == NULL) // dynamic allocation fail
//	{
//		cout << "Dynamic memory allocation fail..." << endl;
//		exit(1); //프로그램을 빠져나가는 명령 / OS가 받아준다
//	}
//
//	cout << "Dynamic allocation memory initial value : \n";
//	for (int i = 0; i < arrLen; i++)
//	{
//		cout << ptrArr[i] << endl;
//	}
//
//	free(ptrArr);
//
//	return 0;
//}

//2nd

//int main()
//{
//	const char* pStr = "This is character string pointer";
//	char* pStrDest = (char*)calloc(strlen(pStr) + 1, sizeof(char));
//
//	cout << "pStrDestination Length : " << strlen((const char*)pStrDest) << endl; //const char* 안하면 warning
//	//strncpy(pStrDest, pStr, strlen(pStr) + 1; //mac
//	strncpy_s(pStrDest, strlen((const char*)pStr) + 1, pStr, strlen((const char*)pStr) + 1);
//	cout << "pStrDestination Length : " << strlen(pStrDest) << endl;
//	cout << "pStrDest : " << pStrDest << endl;
//
//
//	free(pStrDest);
//
//
//	return 0;
//}


//3rd

//int main()
//{
//	char cAlphabet, *pAlphabet, *ptr;
//	pAlphabet = (char*)calloc(35, sizeof(char));
//
//	if (pAlphabet == NULL)
//	{
//		cout << "Dynamic memory allocation fail..." << endl;
//		exit(1);
//	}
//
//	ptr = pAlphabet;
//
//	for (cAlphabet = 0x41; cAlphabet < 0x5B; cAlphabet++)
//	{
//		*ptr++ = cAlphabet;
//	}
//
//	*ptr = '\0'; // NULL은 하나의 character / 문자열의 마지막은 NULL
//
//	cout << "Alphabet String : " << pAlphabet << endl;
//	//pAlphabet은 주소연산 안했기때문에 처음 그 주소이다
//
//	free(pAlphabet);
//
//
//	return 0;
//}


//4th

int main()
{
	int i, totalLen;
	int arrLen = 3, addLen = 2;
	int* ptrArr;

	ptrArr = (int*)calloc(arrLen, sizeof(int)); //calloc은 *아니라 ,
	// 3*4 12byte를 할당받겠다

	if (ptrArr == NULL) // dynamic allocation fail
	{
		cout << "Dynamic memory allocation fail..." << endl;
		exit(1); 
	}

	cout << "Dynamic allocation memory initial value : \n";
	for (int i = 0; i < arrLen; i++)
	{
		cout << ptrArr[i] << endl;
	}

	totalLen = arrLen + addLen;
	ptrArr = (int*)realloc(ptrArr, (totalLen * sizeof(int)));

	if (ptrArr == NULL) // dynamic allocation fail
	{
		cout << "Dynamic memory reallocation fail..." << endl;
		exit(2);
	}

	cout << "Dynamic reallocation memory initial value : \n";
	for (int i = 0; i < totalLen; i++)
	{
		cout << ptrArr[i] << endl;
	}

	free(ptrArr);

	return 0;
}