// 1/25 5번째

#include <iostream>

using namespace std;

int add(int x, int y)
{
    return x + y;
}

float add(float x, float y)
{
    return x + y;
}

int main()
{
    cout << "Adding Integer number : " << add(13, 67) << endl;
    cout << "Adding Float number : " << add(13.33f, 67.25f) << endl; //f 붙이면 float이란걸 명시

    return 0;
}




