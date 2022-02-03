// 2/03 첫번째

#include <iostream>
#include <fstream>
#include <string> // getline시 필요

using namespace std;

int main()
{
    //ofstream file("simplefile.txt");
    //
    //file << "Hello World!!\n";

    //file.close();

    string readString;
    ifstream readFile("simplefile.txt");

    while (getline(readFile, readString))
    {
        cout << readString << endl; //endl을 해야 전체 행이 다 나눠짐;
    }

    return 0;
}

