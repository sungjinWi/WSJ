// 1/25 6번째

#include <iostream>

using namespace std;

double Add(double, double);
double Sub(double, double);
double Mul(double, double);
double Div(double, double);
double Calculator(double, double, double(*func)(double, double));

int main()
{
    double (*calc)(double, double) = nullptr; // Define function pointer
    double dNum1 = 3., dNum2 = 4., result = 0.; //.만찍으면 소수점 이하를 가지는 실수라는 뜻이다
    char oper = '*';

    switch (oper)
    {
    case '+':
        calc = Add;
        break;
    case '-':
        calc = Sub;
        break;
    case '*':
        calc = Mul;
        break;
    case '/':
        calc = Div;
        break;
    default:
        cout << "Support(+, -, *, /) only" << endl;
        break;
    }

    result = Calculator(dNum1, dNum2, calc);

    cout << "The result : " << result << endl;


    return 0;
}

double Add(double dNum1, double dNum2)
{
    return dNum1 + dNum2;
}
double Sub(double dNum1, double dNum2)
{
    return dNum1 - dNum2;
}
double Mul(double dNum1, double dNum2)
{
    return dNum1 * dNum2;

}
double Div(double dNum1, double dNum2)
{
    return dNum1 / dNum2;

}

double Calculator(double  dNum1, double  dNum2, double(*func)(double, double))
{
    return func(dNum1, dNum2);
}

