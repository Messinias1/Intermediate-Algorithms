#include<stdio.h>
#include<stdbool.h>

int main(void)
{
    int year = 2017;
    printf("%i\n", year);
    
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) 
    {
        printf("%i is a leap year!\n", year);
    } else printf("%i is not a leap year\n", year);
}
