

#include <iostream>

using namespace std;

//첫번째

//int main()
//{
//    int x = 0; //초기화 해줍시다 initialize
//
//    cout << "Input a number : ";
//    cin >> x;
//    cout << "Your Input Number : " << x << endl;
//    return 0;
//}

//두번째

//int main()
//{
//    
//
//    int x, y;
//    int nSum;
//    cout << "Input x Number : ";
//    cin >> x; cout << endl;
//    cout << "Input y Number : ";
//    cin >> y; cout << endl;
//
//    nSum = x + y;
//    cout << "nSum = " << nSum << endl;
//
//
//    return 0;
//}

//세번째

int main()
{
    char strName[50];
    int age = 0;

    cout << "Enter your name and age : ";
    cin >> strName >> age; cout << endl;
    cout << "Your name is " << strName << ", Your age is " << age << endl;

    char strErr[] = "Welcone to C++ Hell!!!"; //배열의 초기화 str이 없을때 이렇게 사용했었다
    cerr << "Error message : " << strErr << endl; //출력 스트링에 싣는것이 아니라 바로 출력해준다

    char strLog[] = "We gonna die to Hell";
    clog << "Log message : " << strLog << endl;

    return 0;
    
}
