#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    int n;

    do
    {
        printf("Enter a number between 1 and 8: \n");
        scanf("%d", &n);
    } while (n > 8 || n < 1);

    if (n == 1)
    {
        printf("#\n");
    }
    else if (n == 2)
    {
        printf(" #\n##\n");
    }
    else if (n == 3)
    {
        printf("  #\n ##\n###\n");
    }
    else if (n == 4)
    {
        printf("   #\n  ##\n ###\n####\n");
    }
    else if (n == 5)
    {
        printf("    #\n   ##\n  ###\n ####\n#####");
    }
    else if (n == 6)
    {
        printf("     #\n    ##\n   ###\n  ####\n #####\n######");
    }
    else if (n == 7)
    {
        printf("      #\n     ##\n    ###\n   ####\n  #####\n ######\n#######");
    }
    else if (n == 8)
    {
        printf("       #\n      ##\n     ###\n    ####\n   #####\n  ######\n #######\n########\n");
    }
}
