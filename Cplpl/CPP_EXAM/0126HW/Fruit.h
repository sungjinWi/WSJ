#pragma once

using namespace std;

#pragma pack(push,1)
//struct FruitsInfo
//{
//    string m_Title;
//    string m_Author;
//    string m_Subject;
//    int m_nBookId;
//};
#pragma pack(pop)


class CFruits
{
public:
    //struct FruitsInfo m_FruitsInfo;
    string m_FruitsName; //헝가리안 타입
    int m_FruitsNo;
    int m_FruitsPrice;

    void PrintFruitInformation();
};

void CFruits::PrintFruitInformation()
{
    cout << "Fruit name : " << m_FruitsName << endl;
    cout << "Number of fruit : " << m_FruitsNo << endl;
    cout << "Fruit price : " << m_FruitsPrice << endl << endl;
}