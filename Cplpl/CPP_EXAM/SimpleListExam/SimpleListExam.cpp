// 2/04 8번째 list 반복자는 주소를 가리키기 때문에 연속적인 공간에 있지않을 수 있다

#include <iostream>
#include <list>

using namespace std;

template <typename T>
void PrintList(list<T>& lst)
{
    cout << "[";
    for (const auto& ele : lst)
    {
        cout << ele << " ";
    }
    cout << "]\n";
}

int main()
{
    list<int> nList;

    nList.push_back(10);
    nList.push_back(20);
    nList.push_back(30);
    nList.push_back(40);


    for (list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        cout << *itr << endl;
    }
    cout << "==============================" << endl;
    cout << "Initial status at list" << endl;
    PrintList(nList);

    for (list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if (*itr == 20)
            nList.insert(itr, 50);
    }
    //insert해도 바로 다음 element는 30을 가리킨다

    cout << "Element value 50 inserted before 20" << endl;
    PrintList(nList);

    for (list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if (*itr == 30) 
        {
            nList.erase(itr);
            break; //break 안넣으면 error
        }
    }
    
    cout << "Element value 30 deleted" << endl;
    PrintList(nList);


    return 0;
}


