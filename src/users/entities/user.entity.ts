import { CommunityMember } from 'src/community_members/entities/community_member.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName?: string;

  @Column({ name: 'last_name' })
  lastName?: string;

  @Column({ name: 'identification_number' })
  identificationNumber?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  profilePic?: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => CommunityMember, (userCommunity) => userCommunity.user)
  userCommunities?: CommunityMember[];
}
