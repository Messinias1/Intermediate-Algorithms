using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DaysAndHours
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter starting hour:");
            int startHour = Convert.ToInt32(Console.ReadLine());

            if (startHour > 12 && startHour < 1)
            {
                Console.WriteLine("Please Enter a time between 1 and 12");
            }

            Console.WriteLine("Enter hours passed:");
            int hoursPassed = Convert.ToInt32(Console.ReadLine());
            var newTime = (startHour + hoursPassed) % 12;

            if (newTime == 0)
            {
                newTime = 12;
            }
            Console.WriteLine(newTime);

            int daysPassed = 0;

            while (hoursPassed >= 24)
            {
                daysPassed += 1;
                hoursPassed -= 24;
            }
            Console.WriteLine(daysPassed);
            Console.WriteLine("The Hour is now {0} and {1} days have passed", newTime, daysPassed);
        }
    }
}
