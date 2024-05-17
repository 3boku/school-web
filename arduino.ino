#define dac 25
#define bz 2
#define bt 15

int fre = 5000;
int ch = 0;
int res = 8;
int count = 0;

int tone1 = [294, 29,4 92,4 249];
int tone2 = [2123, 213 , 123, 12,3123 ];

void setup() {
    pinMode(bt, INPUT);
  pinMode(dac, OUTPUT);
  ledcSetup(ch, fre, res);
  ledcAttachPin(bz, ch);

  while(1){
    int value = digitalRead(bt);
    if(value == 1){
        count++;
      break;
    }
    if(count == 1){
        for(int i = 0; i < 5; i++){
        ledcWriteTone(ch, tone1[i]);
        delay(200);
    }
    count = 2;
    }
    else if(count == 3){
        for(int i = 0; i < 25; i++){
        ledcWriteTone(ch, tone2[i]);
        delay(200);
    }
    break;
    }
  }
}


void loop() {}