// 2/04 5번째

#include <iostream>
#include <vector>

using namespace std;




template <typename T>
void PrintVector(vector<T>& vc)
{
    for (typename vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr) 
        //template type으로 사용 될 때는 typename을 써야하는 이유 iterator가 vector template T 에 의존적이기 때문이다
        cout << *itr << endl;
}

int main()
{
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);

    cout << "first vector state : " << endl;
    PrintVector(vec);
    cout << "=============================" << endl;

    // insert before vec[2]
    vec.insert(vec.begin() + 2, 55);
    PrintVector(vec);

    cout << "=============================" << endl;

    // erase vec[3]
    vec.erase(vec.begin() + 3);
    PrintVector(vec);


    return 0;
}




