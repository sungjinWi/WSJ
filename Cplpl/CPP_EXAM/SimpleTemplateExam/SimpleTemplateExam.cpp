// 2/04 1번째

#include <iostream>

using namespace std;

template <typename T> // typename key word in 98 version
void Swap(T& a, T& b); //declaration of prototype , T는 Type

template <> void Swap<double>(double&, double&); //위에서 따로 선언은 해줘야 에러가 안뜸

template <typename T>
T const& Max(T const& a, T const& b);

int main()
{
    int c = 12, d = 15;

    cout << "c : " << c << ", d : " << d << endl;
    Swap(c, d);
    cout << "After swap => c : " << c << ", d : " << d << endl;

    double x = 12.45, y = 79.84;
    cout << "x : " << (double)x << ", y : " << (double)y << endl;
    Swap(x, y);
    cout << "After swap => x : " << (double)x << ", y : " << (double)y << endl;

    string strA = "Hello", strB = "World";
    cout << "strA : " << strA << ", y : " << strB << endl;
    Swap(strA, strB);
    cout << "After swap => strA : " << strA << ", strB : " << strB << endl;

    cout << "int Max value : " << Max(c, d) << endl;
    cout << "double Max value : " << Max(x, y) << endl;
    cout << "string Max value : " << Max(strA, strB) << endl;


    return 0;
}

template <typename T> 
void Swap(T& a, T& b)
{
    T temp;
    temp = a;
    a = b;
    b = temp;
}

// 특정 타입에 대해 적용하고 싶지 않거나 다른 방법을 주고 싶을 때
template <>
void Swap<double>(double&, double&)
{
    // Do not swapping double number

    //or other fucntion => overloading
}

template <typename T>
T const& Max(T const& a, T const& b)
{
    return a < b ? b : a;
}
