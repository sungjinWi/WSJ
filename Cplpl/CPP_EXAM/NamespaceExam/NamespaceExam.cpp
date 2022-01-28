// 01/26 첫번째

#include <iostream>
#include <string>

using std::cout;

namespace first_space
{
    void myFunc()
    {
        cout << "This function is in first_space" << std::endl;
    }

    namespace second_space
    {
        void myFunc()
        {
            cout << "This function is in second_space\n";
        }
    }

    namespace third_space
    {
        void myFunc()
        {
            cout << "This function is in third_space\n";
        }

        namespace fourth_space
        {
            void myFunc()
            {
                cout << "This function is in fourth_space\n";
            }
        }
    }
}

using namespace first_space::second_space;


int main()
{
    std::string strHello = "Hello World!!!"; // #include string 해줬지만 string의 구현도 std에 묶여있기때문에 따로 써줘야댐

    first_space::myFunc();
    myFunc();
    first_space::third_space::myFunc();
    first_space::third_space::fourth_space::myFunc();

    return 0;
}
