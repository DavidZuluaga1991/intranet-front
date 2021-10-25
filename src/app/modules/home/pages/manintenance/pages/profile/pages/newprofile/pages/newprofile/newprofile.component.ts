import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { menu } from 'src/app/config/menu';

@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.scss'],
})
export class NewprofileComponent implements OnInit {
  public files: TreeNode[] = [];
  public selectedFiles2?: TreeNode;
  constructor() {}

  ngOnInit(): void {
    this.files = this.convertData(menu);
  }
  public convertData(items: MenuItem[]): TreeNode[] {
    const files: TreeNode[] = [];
    items.forEach(item => {
      const i: TreeNode = {
        expanded: true,
        label: item.label,
        children: item.items ? this.convertData(item.items) : undefined,
      };
      files.push(i);
    });
    return files;
  }
}
