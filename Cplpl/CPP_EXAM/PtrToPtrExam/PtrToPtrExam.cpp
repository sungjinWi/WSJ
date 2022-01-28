

#include <iostream>

int main()
{
    char a;
    char* b;
    char** c;

    a = 'z';
    b = &a;
    c = &b;

    std::cout << **c << std::endl;

    return 0;
}



