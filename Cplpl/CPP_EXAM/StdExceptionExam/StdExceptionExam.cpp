// 2/03 7번째

#include <iostream>
#include <exception>

using namespace std;

void ExceptHandler()
{
    cout << "Exception !!!" << endl;

    exit(-1);
}

//1st

//int main()
//{
//    set_terminate(ExceptHandler);
//    try
//    {
//        throw 1;
//    }
//    catch (char* const ex)
//    {
//        // cannot process integer exception
//    }
//
//    cout << "Hello World!!" << endl; // exit 해서 hello world 안 찍힘
//
//    return 0;
//}


// 2nd

//struct MyException : public exception // 상속 받습니다
//{
//    const char* what() const throw() // const char로 던진다
//    {
//        return "Defining new exception";
//    }
//};
//
//class DefException : public exception
//{
//    virtual const char* what() const throw()
//    {
//        return "Defining new class exception";
//    }
//};

//int main()
//{
//    try
//    {
//        /*throw MyException();*/
//        throw DefException();
//    }
//    //catch (MyException& e)
//    catch (exception& e)
//    {
//        cout << "DefException Caught" << endl;
//        cout << e.what() << endl;
//    }
//    //catch (const exception&)
//    //{
//    //    // other error
//    //}
//
//    cout << "Hello World!!" << endl;
//
//    return 0;
//}

// 3rd

int main()
{
    try
    {
        int* nArr = new int[1000];
        delete nArr;
    }
    catch (exception& e)
    {
        cout << "Standard Exception Caught" << endl;
        cout << e.what() << endl;
    }
    
    cout << "Hello World!!" << endl;
    
    return 0;
}