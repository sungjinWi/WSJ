

#include <iostream>
#include <string>

using namespace std;

int main()
{
    string food = "Hamburger";
    string* ptrFood = &food;

    cout << "food : " << food << endl;
    cout << "Address of food : " << &food << endl;
    cout << "ptrFood : " << *ptrFood << endl; // *를 쓰면 가리키는 방에있는 data를 찍는다
    cout << "Address of ptrFood : " << ptrFood << endl;

    *ptrFood = "pizza";

    cout << "food : " << food << endl;
    cout << "Address of food : " << &food << endl;
    cout << "ptrFood : " << *ptrFood << endl; // *를 쓰면 가리키는 방에있는 data를 찍는다
    cout << "Address of ptrFood : " << ptrFood << endl;

    //int nNumber = 1234;
    //int* ptrNumber = &nNumber; //포인터 초기화

    //cout << "nNumber : " << nNumber << endl;
    //cout << "Address of nNumber : " << &nNumber << endl;
    //cout << "ptrNumber : " << *ptrNumber << endl; // *를 쓰면 가리키는 방에있는 data를 찍는다
    //cout << "Address of ptrNumber : " << ptrNumber << endl;

    return 0;

}




