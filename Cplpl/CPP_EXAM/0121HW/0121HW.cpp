
#include <iostream>

using namespace std;

int main()
{
    int mNumber[81];


    //세로

    /*for (int i = 0; i < 9; i++)
    {
        for (int j = 0; j < 9; j++) {
            mNumber[9*i + j] = (i + 1) * (j + 1);
            cout << (i + 1) << " * " << (j + 1) << " = " << mNumber[9 * i + j] << endl;
        }
    }*/

    /*for (int num : mNumber)
        cout << num << endl;*/


    //가로
    /*for (int i = 0; i < 9; i++)
    {
        for (int j = 0; j < 9; j++) {
            mNumber[9 * i + j] = (i + 1) * (j + 1);
            cout << (i + 1) << " * " << (j + 1) << " = " << mNumber[9 * i + j] << " ";
        }
        cout << endl;
    }*/

    int* ptr;
    for (int i = 0, int* ptr = mNumber; i < 81; i++, ptr++)
    {
        *ptr = i + 1;
        *ptr

    }

    return 0;
}

