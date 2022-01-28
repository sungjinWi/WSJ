// 1/25 4번째

#include <iostream>

using namespace std;

void HelloFunc() //함수의 prototype (body 빼고)
{
    cout << "Welcome to C++ hell!!!!" << endl;
}

void HelloWorld(string strName)
{
    cout << "Hello " << strName << endl;
}

void WhereAreYouFrom(string strName, int nAge, string strCountry = "KOREA")
{
    cout << "My name is " << strName << " and my age is " << nAge << "!!!\n";
    cout << "I came from " << strCountry << "!!!\n";
}

int HowOldAreYou(int nAge)
{
    int age = nAge;

    return age;
}

void SwapInt(int& x, int& y)
{
    int temp = x;

    x = y;
    y = temp;
}

int main()
{
    HelloFunc();

    HelloWorld("Kiyoung");
    HelloWorld("Doil");

    WhereAreYouFrom("USA", 20);
    WhereAreYouFrom("Jaewon", 20, "UK");

    cout << "My age : " << HowOldAreYou(30) << endl;

    cout << "=============================" << endl;

    int nFirst = 10, nSecond = 30;
    cout << "Before swap nFirst [" << nFirst << "], nSecond{" << nSecond << "]\n";
    SwapInt(nFirst, nSecond);
    cout << "Before swap nFirst [" << nFirst << "], nSecond{" << nSecond << "]\n";

    
    return 0;
}

