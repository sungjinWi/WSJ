#include "Singleton.h"
#include <iostream>

using namespace std;

CSingleton* CSingleton::m_pInst = NULL;

CSingleton::CSingleton()
{
    count = 0;
};

CSingleton::~CSingleton()
{

}

CSingleton* CSingleton::getInstance() // 메모리가 할당이 안되있으면 할당
{
    if (!m_pInst)
    {
        m_pInst = new CSingleton();
    }

    return m_pInst;
}

void CSingleton::DestroyInst()
{
    if (!m_pInst)
    {
        return;
    }

    delete m_pInst;
    m_pInst = NULL;
}

void CSingleton::HelloWorld()
{
    count++;
    cout << "Hello World!!! -count(" << count << ")" << endl;
}