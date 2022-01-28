

#include <iostream>

using namespace std;

int main()
{
    int arrNumber[5];
    int* ptr;
    ptr = arrNumber; *ptr = 10; //arrNumber[0]
    // 4바이트 공간을 ++하는 것이다
    ptr++; *ptr = 20; //arrNumber[1]
    ptr = &arrNumber[2]; *ptr = 30; //arrNumber[2]
    ptr = arrNumber + 3; *ptr = 40; //arrNumber[3]
    ptr = arrNumber; *(ptr + 4) = 50; //arrNumber[4]

    for (int i = 0; i < 5; i++)
    {
        cout << "[" << i << "] = " << arrNumber[i] << endl;
    }

    return 0;
}


