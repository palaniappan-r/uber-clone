import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';

@Module({
//  imports: [MongooseModule.forRoot('mongodb://localhost/uber-clone'), CustomerModule, DriverModule],
imports: [MongooseModule.forRoot('mongodb+srv://user1:userpass@cluster0.jxx0lmq.mongodb.net/'), CustomerModule, DriverModule],
})
export class UserModule {}
