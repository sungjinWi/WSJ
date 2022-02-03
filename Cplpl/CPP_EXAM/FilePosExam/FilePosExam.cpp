// 2/03 5번째

#include <iostream>
#include <fstream>

using namespace std;

struct DATE
{
    int year;
    int month;
    int day;
};

int main()
{
    DATE arrDate[3] = {
        { 2021, 12, 25 },
        { 2022, 11, 11 },
        { 2022, 2, 3}
    };
    DATE date;
    DATE wDate = { 1991, 12, 23 };

    ofstream outFile;
    outFile.open("test.txt", ios::out | ios::binary); //text지만 binary
    outFile.write((char*)arrDate, sizeof(DATE) * 3);

    outFile.seekp(0);
    outFile.write((char*)&wDate, sizeof(DATE)); // structure를 파일에 읽고 쓰고 가능 / 첫번째를 wDate를 넣었다
    outFile.close();

    ifstream inputFile;
    //arrDate initiate to 0;
    memset(arrDate, 0, sizeof(DATE) * 3); //  memory set <cstring>에 있다 arrDate를 size *3만큼 0으로 채워넣어라 
    inputFile.open("test.txt", ios::in | ios::binary);
    inputFile.read((char*)&arrDate, sizeof(DATE) * 3);

    for (int i = 0; i < 3; i++)
    {
        cout << arrDate[i].year << "-" << arrDate[i].month << "-" << arrDate[i].day << endl;
    }

    cout << "Random file position reading file" << endl;
    inputFile.seekg(sizeof(DATE) * 1, ios::beg); // moving file position
    inputFile.read((char*)&date, sizeof(DATE));
    cout << date.year << "-" << date.month << "-" << date.day << endl;

    return 0;
}




