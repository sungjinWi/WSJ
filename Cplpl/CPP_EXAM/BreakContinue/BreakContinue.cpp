

#include <iostream>

using namespace std;

int main()
{
    for (int i = 0; i < 100; i++) 
    {
        //if (i == 59)  break; 58까지만 // continue; 59 빼고 100까지 
        if ((i % 2) == 1) continue; //짝수만찍어

        cout << i << ' ';
    }

    return 0;
}

