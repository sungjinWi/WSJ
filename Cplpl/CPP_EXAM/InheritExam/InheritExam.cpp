// 1/28 3번째

#include <iostream>

using namespace std;

// Base Class

class CVehicle
{
public:
    CVehicle() 
    {
        m_brand = "AnyBrand";
    };
    string m_brand;
    void Honk()
    {
        cout << "Pong Pong" << endl;
    }
};

// Derived Class
class CCar : public CVehicle
{
public:
    CCar() 
    {
        m_model = "X7";
        m_brand = "BMW";

    }
    string m_model;
};

int main()
{
    CCar myCar;

    cout << myCar.m_brand << ", model : " << myCar.m_model << endl;

    return 0;
}
