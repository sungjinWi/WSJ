//숫자야구 만들기

#include <iostream>
#include <random>

using namespace std;



int main()
{
    random_device rd;

    mt19937 gen(rd());

    uniform_int_distribution<int> dis(1, 9);

    int *solArr = new int[3];
    

    for (int i = 0; i < 3; i++)

    {
        int ranN = dis(gen);
        solArr[i] = ranN;
        for (int j = 0; j < i; j++)
        {
            if (solArr[i] == solArr[j]) i--;
        }
        cout << ranN << endl;
    }

    for (int i = 0; i < 3; i++)
    {
        cout << solArr[i];
    }

    int inputNum;
    cout << endl << "숫자 입력 : ";
    cin >> inputNum;
    
    int inputArr[3] = { inputNum / 100,inputNum % 100 / 10,inputNum % 10 };

    for (int i = 0; i < 3; i++)
    {
        cout << inputArr[i];
    }

    for (int i = 0; i < 3; i++)
    {
        delete solArr[i];
        solArr[i] = NULL;//메모리 해제
    }



    return 0;
}

