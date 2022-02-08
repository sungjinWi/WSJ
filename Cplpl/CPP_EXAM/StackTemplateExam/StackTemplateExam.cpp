// 2/04 3번째
// const 쓰면 함수 내에서 어떤 값도 바꿀 수 없다


#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T>
class CStack
{
private:
    vector<T> elements;

public: // vector 내장함수
    void push(T const&); // push elements
    void pop();          // pop elements
    T top() const;       //return top eletment 

    bool empty() const
    {
        return elements.empty();
    }
};

int main()
{
    try
    {
        CStack<int>    nStack;   //integer stack
        CStack<string> strStack; // string stack

        //manipulate integer stack
        nStack.push(25);
        cout << "nStack top element : " << nStack.top() << endl;

        //manipulate string stack
        strStack.push("Hello Stack");
        strStack.push("Hello C++");
        strStack.push("Hello World");
        strStack.pop();

        cout << "strStack top element : " << strStack.top() << endl;

        strStack.pop();
        strStack.pop();
    }
    catch (const std::exception& ex)
    {
        cerr << "Exception : " << ex.what() << endl;
        return -1;
    }

    return 0;
}

template <class T>
void CStack<T>::push(T const& elem)
{
    elements.push_back(elem);
}

template <class T>
void CStack<T>::pop()
{
    if (elements.empty())
    {
        throw out_of_range("CStack<>::pop() : empty stack");
    }

    // remove last element
    elements.pop_back();
}

template <class T>
T CStack<T>::top() const
{
    if (elements.empty())
    {
        throw out_of_range("CStack<>::top() : empty stack");
    }

    //return copy of last(top) element
    return elements.back(); 
}
