// 2/03 두번째

#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

int main()
{
    char data[100];

    ofstream outputFile;
    outputFile.open("simplefile.dat");

    cout << "Writing to the file " << endl;
    cout << "Enter Your Name : "; 
    cin.getline(data, 100);

    outputFile << data << endl;

    cout << "Enter your age : ";
    cin >> data;
    cin.ignore(); // cin이 받은 stream 버퍼 비우는거야

    outputFile << data << endl;
    outputFile.close();

    ifstream inputFile;
    inputFile.open("simplefile.dat");

    cout << "Reading from the simplefile.dat" << endl;
    stringstream strStream;
    /*inputFile >> data;
    cout << data << endl;*/ // 버전이슈로 사용중단 전체 읽어오기 불가

    strStream << inputFile.rdbuf();
    cout << strStream.str();

    inputFile.close();

    return 0;
}




