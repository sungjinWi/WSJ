

#include <iostream>
#include <string>

using namespace std;

int main()
{
    int i = 0;

    //1st

    /*while (i < 10)
    {
        cout << i << endl;
        i++;
    }*/


    //2nd

    //do {
    //    cout << i << endl;
    //    i++;
    //} while (i < 10); //do while문은 ;로 막아야한다


    //3rd

    /*for (int i = 0; i < 10; i += 2)
    {
        cout << "for loop i = " << i << endl;
    }*/

    
    //4th 이중포문이 아닌 이중포문처럼 쓸 수 있는 방법

    /*for (int n = 0, i = 100; n != i; ++n, --i)
    {
        cout << "n = " << n << ", i = " << i << endl;
    }*/


    //5th

    /*int nArr[5] = { 1, 3, 5, 7, 9 };

    for (int i : nArr)
    {
        cout << "Range-Based for loop i = " << i << endl;
    }*/


    // 6th

    //string str( "Hello_World" );
    char str[] = "Hello_world!!!"; //#include string해야함 / 배열은 마지막에 \0이 들어가기때문에 null이 뜬다
    for (char c : str)
    {
        cout << "Range-Based for loop c = " << c << endl;
    }
   

    return 0;
}


