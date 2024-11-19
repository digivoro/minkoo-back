import { Community } from 'src/communities/entities/community.entity';
import { CommunityMemberRole } from 'src/community_member_roles/entities/community_member_role.entity';
import { User } from 'src/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('community_member')
export class CommunityMember {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'community_id' })
  communityId: number;

  @CreateDateColumn({ name: 'joined_at' })
  joinedAt: Date;

  @ManyToOne(() => User, (u) => u.userCommunities)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Community, (c) => c.userCommunities)
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @ManyToOne(() => CommunityMemberRole, (mr) => mr.id)
  @JoinColumn({ name: 'role_id' })
  role: CommunityMemberRole;
}
