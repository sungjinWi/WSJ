#include <iostream>

using namespace std;

int main()
{
    short i; // short == short int
    short unsigned int j;

    j = 50000;
    i = j; //부호비트가 생기기 때문에 i : -15536으로 나온다

    cout << "i(signed) : " << i << " , j(unsigned) : " << j << endl;

    return 9;
}



