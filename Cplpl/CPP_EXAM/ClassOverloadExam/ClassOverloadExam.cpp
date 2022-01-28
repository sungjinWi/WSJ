#include "Print.h"

int main()
{
    CPrint printData; //CPrint 는 printData라고 선언
    printData.print(4);
    printData.print(3.141592);
    printData.print((char*)"Hello world!!!"); //ms 는 char* type casting 해야함

    cout << "Hello C++!!!\n";

    return 0;
}




