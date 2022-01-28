#include <iostream>

using namespace std;


class CCar {
public:
    CCar(); // Defualt constructor
    CCar(string brand, string name, int year);


    // 밖으로 꺼내는게 FM이고 꺼내면 선언만 해주는걸로 바꾼다

    /*CCar() {};
    CCar(string brand, string name, int year)
    {
        m_strBrand = brand;
        m_strName = name;
        m_nYear = year;
    }*/
        string m_strBrand;
        string m_strName;
        int m_nYear;
};

CCar::CCar() //빈 것도 해주는 버릇을 들이자
{
}

CCar::CCar(string brand, string name, int year)
{
    m_strBrand = brand;
    m_strName = name;
    m_nYear = year;
}

void printCar()
{
    return;
}


int main()
{
    CCar bmwCar("BMW", "X5", 2002); //Default constructor에 있는 값을 넣어줄 때 이렇게 한다 / 초기화
    CCar audiCar("AUDI", "A8", 2012); //Default constructor에 있는 값을 넣어줄 때 이렇게 한다 / 초기화

    cout << bmwCar.m_strBrand << " " << bmwCar.m_strName << ", " << bmwCar.m_nYear << endl;
    cout << audiCar.m_strBrand << " " << audiCar.m_strName << ", " << audiCar.m_nYear << endl;

    return 0;
}




