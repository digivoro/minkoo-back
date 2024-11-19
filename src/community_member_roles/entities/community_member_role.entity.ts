import { CommunityMember } from 'src/community_members/entities/community_member.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('community_member_roles')
export class CommunityMemberRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  role: string;

  @OneToMany(() => CommunityMember, (cm) => cm.role)
  communityMember: CommunityMember[];
}
